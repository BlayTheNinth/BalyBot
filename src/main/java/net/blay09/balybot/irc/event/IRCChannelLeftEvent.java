// Copyright (c) 2014, Christopher "blay09" Baker
// All rights reserved.
package net.blay09.balybot.irc.event;

import net.blay09.balybot.irc.IRCChannel;
import net.blay09.balybot.irc.IRCConnection;

/**
 * This event is published on the MinecraftForge.EVENTBUS bus whenever EiraIRC leaves a channel.
 */
public class IRCChannelLeftEvent extends IRCEvent {

	/**
	 * the channel that was left
	 */
	public final IRCChannel channel;

	/**
	 * INTERNAL EVENT. YOU SHOULD NOT POST THIS YOURSELF.
	 * @param connection the connection the channel that was left is on
	 * @param channel the channel that was left
	 */
	public IRCChannelLeftEvent(IRCConnection connection, IRCChannel channel) {
		super(connection);
		this.channel = channel;
	}

}
