class Logger {

    static startTest(testName) {

        console.log('\n=====================================');
        console.log(`STARTING TEST: ${testName}`);
        console.log('=====================================\n');
    }

    static step(message) {

        console.log(`[STEP] ${message}`);
    }

    static success(message) {

        console.log(`[SUCCESS] ${message}`);
    }

    static failure(message) {

        console.log(`[FAILED] ${message}`);
    }

    static warning(message) {

        console.log(`[WARNING] ${message}`);
    }

    static completed() {

        console.log('\n=====================================');
        console.log('TEST COMPLETED SUCCESSFULLY');
        console.log('=====================================\n');
    }

    static failed(error) {

        console.log('\n=====================================');
        console.log('TEST FAILED');
        console.log('=====================================');

        console.log(error);
    }
}

module.exports = Logger;