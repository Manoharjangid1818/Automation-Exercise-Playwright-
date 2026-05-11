pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git 'https://github.com/Manoharjangid1818/Automation-Exercise-Playwright-.git'
            }
        }

        stage('Install Dependencies') {

            steps {

                bat 'npm install'
            }
        }

        stage('Install Browsers') {

            steps {

                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {

            steps {

                bat 'npx playwright test'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}