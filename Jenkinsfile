pipeline {
    agent any

    environment {
        BACKEND_IMAGE = 'task-manager-backend'
        FRONTEND_IMAGE = 'task-manager-frontend'
    }

    stages {
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'docker build -t $BACKEND_IMAGE .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'docker build -t $FRONTEND_IMAGE .'
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}
