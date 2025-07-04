FROM jenkins/jenkins:lts

USER root

# Install Docker
RUN apt-get update && apt-get install -y docker.io curl

# Install kubectl
RUN curl -LO https://dl.k8s.io/release/v1.29.0/bin/linux/amd64/kubectl && \
  chmod +x kubectl && \
  mv kubectl /usr/local/bin/

RUN which kubectl && kubectl version --client

# Add plugins (already done)
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN jenkins-plugin-cli --plugin-file /usr/share/jenkins/ref/plugins.txt
