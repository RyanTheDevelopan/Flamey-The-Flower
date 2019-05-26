import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "oof"


    help (): string {

        return "...";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            

            //Oh no, ur 'bout to be kicced
            msgObject.channel.send("Yeah, go to hell.");

            msgObject.delete(0); 
        }
    }