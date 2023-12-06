export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		storeValue('selectedPlayerId', Player_Snapshot.selectedRow.player_id);
		navigateTo('Player Profile');
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}