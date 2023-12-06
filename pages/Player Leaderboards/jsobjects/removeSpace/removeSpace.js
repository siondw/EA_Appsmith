export default {
	myVar1: [],
	myVar2: {},
	myFunc1 () {
		let inputValue = Select1.selectedOptionValue;
		let processedValue = inputValue.replace(/\s+/g, '%20');
		
		return processedValue
	}
}