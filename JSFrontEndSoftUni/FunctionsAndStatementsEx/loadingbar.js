function loadingBar(percent) {
    const progress = '%'.repeat(percent / 10);
    const remaining = '.'.repeat(10 - (percent / 10));

    if (percent === 100) {
        console.log('100% Complete!');
        console.log(`[${progress}]`);
    } else {
        console.log(`${percent}% [${progress}${remaining}]`);
        console.log('Still loading...');
    }
}

// loadingBar(30);
// loadingBar(50);
// loadingBar(100);