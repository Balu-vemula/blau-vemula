pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm intall'
                sh 'npm test'
            }
        }
    }
}