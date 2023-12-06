export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		{{ storeValue('selectedGameId', Game_Table.selectedRow.game_id); 
			navigateTo('Game_Dashboard'); }}

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}