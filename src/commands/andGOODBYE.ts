import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "andgoodbye"


    help (): string {

        return `The fourth part of "#greetings"`;
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //What gets sent. (Oh no, it's short as hell)

            msgObject.delete(0); 
            msgObject.channel.send(`*YES. DO STICK AROUND. HECK, YOU COULD POSSIBLY SHOW US HOW MUCH OF AN **IDIOT** YOU ACTUALLY ARE.*`);;
        }
    }