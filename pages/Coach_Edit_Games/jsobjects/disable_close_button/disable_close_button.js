export default {
    // State variable to track the disabled state of the button
    isCloseButtonDisabled: false,

    // Function to disable the close button temporarily
    disableCloseButtonTemporarily: function() {
        this.isCloseButtonDisabled = true;
        setTimeout(() => {
            this.isCloseButtonDisabled = false;
        }, 3000); // 3000 milliseconds = 3 seconds
    },

    // Your existing function (if it has other logic, include it here)
    myFun1: function() {
        // Call the function to disable the button temporarily
        this.disableCloseButtonTemporarily();

        // Other logic for myFun1...
    }
};
