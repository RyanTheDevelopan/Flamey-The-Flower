import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class booby implements IBotCommand {

    private readonly _command = "booby"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //boobies
            msgObject.client.user.setGame('Searching Google for "booby"')
    }   }
