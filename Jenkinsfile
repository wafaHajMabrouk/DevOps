pipeline {
    agent any
    environment {
        DOCKER_IMAGE_BACKEND = "hajmabroukwafa/backend-app"
        DOCKER_IMAGE_FRONTEND = "hajmabroukwafa/frontend-app"
        DOCKER_REGISTRY = "docker.io"
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/wafaHajMabrouk/DevOps.git', branch: 'main'
            }
        }
        stage('Install Backend Dependencies') {
            steps {
                script {
                    dir('backend') {
                        bat 'npm install'
                    }
                }
            }
        }
        stage('Install Frontend Dependencies') {
            steps {
                script {
                    dir('frontend') {
                        bat 'npm install'
                    }
                }
            }
        }
        stage('Run Backend Tests') {
            steps {
                script {
                    dir('backend') {
                        bat 'npm test' // Exécuter les tests backend avec Mocha
                    }
                }
            }
        }
        stage('Run Frontend Tests') {
            steps {
                script {
                    dir('frontend') {
                        bat 'npm run test' // Exécuter les tests frontend si nécessaire (par exemple, avec Jest)
                    }
                }
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    // Build the backend image
                    dir('backend') {
                        bat 'docker build -t ${DOCKER_REGISTRY}/${DOCKER_IMAGE_BACKEND}:latest .'
                    }
                    // Build the frontend image
                    dir('frontend') {
                        bat 'docker build -t ${DOCKER_REGISTRY}/${DOCKER_IMAGE_FRONTEND}:latest .'
                    }
                }
            }
        }
        stage('Push Docker Images to DockerHub') {
            steps {
                script {
                    // Push the backend image to DockerHub
                    bat 'docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE_BACKEND}:latest'
                    // Push the frontend image to DockerHub
                    bat 'docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE_FRONTEND}:latest'
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                sshagent(['id-ssh']) {
                    script {
                        bat 'ssh user@server "docker pull ${DOCKER_REGISTRY}/${DOCKER_IMAGE_BACKEND}:latest && docker pull ${DOCKER_REGISTRY}/${DOCKER_IMAGE_FRONTEND}:latest && docker-compose up -d"'
                    }
                }
            }
        }
    }
}
