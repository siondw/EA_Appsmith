export default {
    myVar1: [],
    myVar2: {},
    async myFun1 () {
        // Assuming Delete_Game.run() returns a promise
        await Delete_Game.run({ game_id: Simplified_Games.selectedRow.game_id });
        
        // After the delete operation is complete, fetch the updated games list
        await Get_Simplified_Games.run();
    },
    async myFun2 () {
        // use async-await or promises
        // await storeValue('varName', 'hello world')
    }
}
