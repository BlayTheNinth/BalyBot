package net.blay09.balybot;

import com.google.common.io.Files;
import net.blay09.balybot.command.BotCommand;
import net.blay09.balybot.module.Module;
import org.apache.commons.io.Charsets;

import java.io.File;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DocBuilder {

    public static void buildDocs(Database database, String channel) {
        StringBuilder sb = new StringBuilder();
        sb.append("<h1>BalyBot (").append(channel).append(")</h1>\n");

        sb.append("<h2>Index</h2>\n");
        sb.append("<ul>\n");

        sb.append("<li>General<ul>\n");
        sb.append("<a href='#userlevels'><li>User Levels</li></a>\n");
        sb.append("<a href='#variables'><li>Variables</li></a>\n");
        sb.append("<a href='#expressions'><li>Expressions</li></a>\n");
        sb.append("</ul></li>\n");

        sb.append("<li>Modules<ul>\n");
        for(Module module : Module.getActiveModules(channel)) {
            sb.append("<a href='#").append(module.getModuleCode()).append("'><li>").append(module.getModuleName()).append("</li></a>\n");
        }
        sb.append("</ul></li>\n");

        sb.append("<a href='#commands'><li>Commands</li></a>\n");

        sb.append("</ul>\n");

        sb.append("<h2>General</h2>\n");
        sb.append("<h3 id='userlevels'>User Levels<h3>\n");
        sb.append("<table border='1'>\n");
        sb.append("<tr><th>Name</th><th>Description</th></tr>\n");
        sb.append("<tr><td>owner</td><td>The bot account itself, only used for global configurations and joining channels.</td></tr>\n");
        sb.append("<tr><td>broadcaster</td><td>The broadcaster of the channel the bot resides in, used for module configurations.</td></tr>\n");
        sb.append("<tr><td>mod</td><td>Moderators of the channel the bot resides in. This includes global moderators.</td></tr>\n");
        sb.append("<tr><td>sub</td><td>Subscribers of the channel the bot resides in. Obviously only useful for partnered streamers.</td></tr>\n");
        sb.append("<tr><td>reg</td><td>Regulars of the channel the bot resides in. Regulars have to be manually added.</td></tr>\n");
        sb.append("<tr><td>turbo</td><td>Twitch Turbo users. Might limit usage of certain commands, is not intuitive though.</td></tr>\n");
        sb.append("<tr><td>all</td><td>All users. Everyone. Including your grandmother and the president of the United States.</td></tr>\n");
        sb.append("</table>\n");

        sb.append("<h3 id='variables'>Variables<h3>\n");
        sb.append("<table border='1'>\n");
        sb.append("<tr><th>Name</th><th>Description</th></tr>\n");
        sb.append("<tr><td>{SENDER}</td><td>The display name of the command sender.</td></tr>\n");
        sb.append("<tr><td>{TITLE}</td><td>The current channel title.</td></tr>\n");
        sb.append("<tr><td>{GAME}</td><td>The currently played game.</td></tr>\n");
        sb.append("<tr><td>{VIEWERS}</td><td>The amount of people currently watching.</td></tr>\n");
        sb.append("<tr><td>{CHATTERS}</td><td>The amount of people currently in chat.</td></tr>\n");
        sb.append("<tr><td>{EXPR:...}</td><td>The result of the custom expression following the colons.</td></tr>\n");
        sb.append("<tr><td>{CMD:...}</td><td>The result of another command call following the colons.</td></tr>\n");
        sb.append("<tr><td>{REG:...}</td><td>The content of a regex group indexed by the value after the colons.</td></tr>\n");
        sb.append("<tr><td>{0}</td><td>The argument that was given to a command at the specified index, starting at 0.</td></tr>\n");
        sb.append("</table>\n");

        sb.append("<h3 id='expressions'>Expressions<h3>\n");
        sb.append("<table border='1'>\n");
        sb.append("<tr><th>Name</th><th>Description</th></tr>\n");
        sb.append("<tr><td>in_str(src, find)</td><td>Takes two string parameters and returns true if the first contains the second string.</td></tr>\n");
        sb.append("<tr><td>IS_LIVE</td><td>Returns true if the channel is currently live.</td></tr>\n");
        sb.append("<tr><td>title(channel)</td><td>Returns the current channel title of the given channel name.</td></tr>\n");
        sb.append("<tr><td>game(channel)</td><td>Returns the current game played of the given channel name.</td></tr>\n");
        sb.append("<tr><td>viewers(channel)</td><td>Returns the amount of people currently watching the given channel name.</td></tr>\n");
        sb.append("<tr><td>isLive(channel)</td><td>Returns true if the given channel name is currently live.</td></tr>\n");
        sb.append("</table>\n");

        sb.append("<h2>Modules</h2>\n");
        for(Module module : Module.getActiveModules(channel)) {
            sb.append("<h3 id='").append(module.getModuleCode()).append("'>").append(module.getModuleName()).append(" (").append(module.getModuleCode()).append(")</h3>\n");
            sb.append(module.getModuleDescription()).append("<br />\n");

            if(module.getCommands().size() > 0) {
                sb.append("<table border='1'>\n");
                sb.append("<tr>\n");
                sb.append("<th>Command</th>\n");
                sb.append("<th>User Level</th>\n");
                sb.append("</tr>\n");

                for (BotCommand command : module.getCommands()) {
                    sb.append("<tr>\n");
                    sb.append("<td>").append(escape(command.getCommandSyntax())).append("</td>\n");

                    sb.append("<td>");
                    sb.append(command.minUserLevel.name);
                    sb.append("</td>\n");

                    sb.append("</tr>\n");
                }

                sb.append("</table>\n");
            }
        }

        sb.append("<h2 id='commands'>Commands</h2>\n");
        sb.append("<table border='1'>\n");
        sb.append("<tr>\n");
        sb.append("<th>ID</th>\n");
        sb.append("<th>Name</th>\n");
        sb.append("<th>Message</th>\n");
        sb.append("<th>User Level</th>\n");
        sb.append("<th>Condition</th>\n");
        sb.append("<th>Whisper To</th>\n");
        sb.append("<th>Regex</th>\n");
        sb.append("</tr>\n");
        try {
            Statement stmt = database.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM commands WHERE channel_name = '" + channel + "'");
            while(rs.next()) {
                sb.append("<tr>\n");
                sb.append("<td>").append(rs.getString("id")).append("</td>\n");
                sb.append("<td>").append(escape(rs.getString("command_name"))).append("</td>\n");
                sb.append("<td>").append(escape(rs.getString("message"))).append("</td>\n");

                sb.append("<td>");
                sb.append(UserLevel.fromId(rs.getInt("user_level")).name);
                sb.append("</td>\n");

                sb.append("<td>");
                sb.append(rs.getString("condition") != null ? escape(rs.getString("condition")) : "---");
                sb.append("</td>\n");

                sb.append("<td>");
                sb.append(rs.getString("whisper_to") != null ? escape(rs.getString("whisper_to")) : "---");
                sb.append("</td>\n");

                sb.append("<td>").append(escape(rs.getString("regex"))).append("</td>\n");

                sb.append("</tr>\n");
            }
            rs.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        sb.append("</table>\n");

        File commandsDir = new File(Config.getValue("*", "docs_dir", "docs"));
        if(commandsDir.exists() || commandsDir.mkdir()) {
            try {
                Files.write(sb, new File(commandsDir, channel.substring(1) + ".html"), Charsets.UTF_8);
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            System.out.println("Could not create commands documentation");
        }
    }

    public static String escape(String s) {
        return s.replace("<", "&lt;").replace(">", "&gt;");
    }

}
