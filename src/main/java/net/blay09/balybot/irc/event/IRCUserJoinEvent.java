// Copyright (c) 2014, Christopher "blay09" Baker
// All rights reserved.
package net.blay09.balybot.irc.event;

import net.blay09.balybot.irc.IRCChannel;
import net.blay09.balybot.irc.IRCConnection;
import net.blay09.balybot.irc.IRCUser;

/**
 * This event is published on the MinecraftForge.EVENTBUS bus whenever someone joins an IRC channel EiraIRC is in.
 */
public class IRCUserJoinEvent extends IRCEvent {

	/**
	 * the channel that the user joined
	 */
	public final IRCChannel channel;

	/**
	 * the user that joined the channel
	 */
	public final IRCUser user;

	/**
	 * INTERNAL EVENT. YOU SHOULD NOT POST THIS YOURSELF.
	 * @param connection the connection this event is based on
	 * @param channel the channel that the user joined
	 * @param user the user that joined the channel
	 */
	public IRCUserJoinEvent(IRCConnection connection, IRCChannel channel, IRCUser user) {
		super(connection);
		this.channel = channel;
		this.user = user;
	}
}
