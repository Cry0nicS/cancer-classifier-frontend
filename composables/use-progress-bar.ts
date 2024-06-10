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
            progressBarValue.value += 10;
        } else {
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
            (seconds * 1000) / 10
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
