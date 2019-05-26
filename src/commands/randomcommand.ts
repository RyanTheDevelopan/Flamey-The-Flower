import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "randomcommand"


    help (): string {

        return "...";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            

            //Oh no, ur 'bout to be kicced
            msgObject.channel.send("Eh, @everyone?");

            msgObject.delete(0); 
        }
    }