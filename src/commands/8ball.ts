import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "8ball"


    help (): string {

        return "Use the darn eight BALLS (:==> * 8)";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            var fortunes = [
                "Yes",
                "No",
                "Of course.",
                "Imma send you to hell.",
                "Fuck no",
                "Maybe never",
                "Shut the fuck up",
                "You WANT to die?",
                "DIE."
            ];


            if (args[1]) msgObject.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]); 
            else msgObject.channel.send("IDIOT. Actually ask me a question. GOD DAMN.");
        }
        
    }