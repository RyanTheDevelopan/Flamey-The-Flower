import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class kicc implements IBotCommand {

    private readonly _command = "ban"


    help (): string {

        return "IN THIS WORLD, IT'S BAN OR BE BANNED";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let banLog = `${msgObject.author.username}: ${suppliedReason}`;

            msgObject.delete(0); 

            if(!msgObject.member.hasPermission("ADMINISTRATOR")){
                msgObject.channel.send(`${msgObject.author.username}, Nice try idiot, but you don't have the determination to ban that idiot.`);
                return;
            }

            if(!mentionedUser)
            {
                msgObject.channel.send(`${msgObject.author.username}, I couldn't find the user you said because you were being SUCH AN IDIOT. How 'bout I kill you instead?`);
                return;
            }

            msgObject.guild.member(mentionedUser).ban(banLog)
                .then(console.log)
                .catch(console.error)
        }
    }
