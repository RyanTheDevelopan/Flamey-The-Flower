"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "8ball";
    }
    help() {
        return "Use the darn eight BALLS (:==> * 8)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
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
        if (args[1])
            msgObject.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else
            msgObject.channel.send("IDIOT. Actually ask me a question. GOD DAMN.");
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGJhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvOGJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUE4Qm5DLENBQUM7SUEzQkQsSUFBSTtRQUVBLE9BQU8scUNBQXFDLENBQUM7SUFDakQsQ0FBQztJQUVHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUV6RSxJQUFJLFFBQVEsR0FBRztZQUNYLEtBQUs7WUFDTCxJQUFJO1lBQ0osWUFBWTtZQUNaLHdCQUF3QjtZQUN4QixTQUFTO1lBQ1QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsTUFBTTtTQUNULENBQUM7UUFHRixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDdEYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBRUo7QUFoQ0wsOEJBZ0NLIn0=