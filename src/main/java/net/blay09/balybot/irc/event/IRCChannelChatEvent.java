// Copyright (c) 2014, Christopher "blay09" Baker
// All rights reserved.
package net.blay09.balybot.irc.event;

import net.blay09.balybot.irc.IRCChannel;
import net.blay09.balybot.irc.IRCConnection;
import net.blay09.balybot.irc.IRCMessage;
import net.blay09.balybot.irc.IRCUser;

/**
 * This event is published on the MinecraftForge.EVENTBUS bus whenever a commandMessage was sent to an IRC channel EiraIRC is in.
 * If this event is cancelled, EiraIRC will not post the commandMessage in chat.
 */
public class IRCChannelChatEvent extends IRCEvent {

	/**
	 * the channel this IRC commandMessage came from
	 */
	public final IRCChannel channel;

	/**
	 * the user that sent this IRC commandMessage
	 */
	public final IRCUser sender;

	/**
	 * the raw IRC commandMessage that was sent
	 */
	public final IRCMessage rawMessage;

	/**
	 * the commandMessage that was sent
	 */
	public final String message;

	/**
	 * true, if this commandMessage is an emote
	 */
	public final boolean isEmote;

	/**
	 * true, fi this commandMessage was sent as a NOTICE
	 */
	public final boolean isNotice;

	/**
	 * INTERNAL EVENT. YOU SHOULD NOT POST THIS YOURSELF.
	 * @param connection the connection this IRC commandMessage came from
	 * @param channel the channel this IRC commandMessage came from
	 * @param sender the user that sent this IRC commandMessage
	 * @param rawMessage the raw IRC commandMessage that was sent
	 * @param message the commandMessage that was sent
	 * @param isEmote true, if this commandMessage is an emote
	 * @param isNotice true, if this commandMessage was sent as a NOTICE
	 */
	public IRCChannelChatEvent(IRCConnection connection, IRCChannel channel, IRCUser sender, IRCMessage rawMessage, String message, boolean isEmote, boolean isNotice) {
		super(connection);
		this.channel = channel;
		this.sender = sender;
		this.rawMessage = rawMessage;
		this.message = message;
		this.isEmote = isEmote;
		this.isNotice = isNotice;
	}
}
