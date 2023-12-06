export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		storeValue('selectedPlayerId', Player_Snapshot.selectedRow.player_id);
		navigateTo('Player Profile');
		
	}
}