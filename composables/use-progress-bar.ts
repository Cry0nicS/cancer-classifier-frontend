/**
 * Progress bar function in seconds.
 * The function takes a number of seconds as an argument and returns an object with properties for the progress bar value
 * and whether the process is complete, and methods for starting and stopping the progress bar.
 * The progress bar value is computed in increments of 10% until it reaches 100%, at which point it resets to 0.
 * The progress bar stops updating when the process is complete.
 */
export function useProgressBar(seconds: number) {
    const progressBarValue = ref(0);
    const isProcessComplete = ref(false);
    let intervalId: ReturnType<typeof setInterval>;

    const computeProgressBarValue = () => {
        if (progressBarValue.value < 100) {
            // Increment the progress bar value by 2% until it reaches 100%.
            progressBarValue.value += 2;
        } else {
            // Restart the progress bar when it reaches 100%. This simulates a continuous progress bar.
            progressBarValue.value = 0;
        }
    };

    const startProgressBar = () => {
        clearInterval(intervalId);

        intervalId = setInterval(
            () => {
                if (!isProcessComplete.value) {
                    computeProgressBarValue();
                }
            },
            // This calculation spreads the progress updates evenly over the specified number of seconds.
            // Dividing by 50 it means the progress bar updates 50 times within the specified number of seconds.
            // Changing this requires adjusting the increment value in the computeProgressBarValue function.
            (seconds * 1000) / 50
        );
    };

    const stopProgressBar = () => {
        clearInterval(intervalId);
    };

    return {
        progressBarValue,
        isProcessComplete,
        startProgressBar,
        stopProgressBar
    };
}
