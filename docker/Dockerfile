FROM ubuntu:22.04

# Set default shell during Docker image build to bash
SHELL ["/bin/bash", "-c"]

# Set non-interactive frontend for apt-get to skip any user confirmations
ENV DEBIAN_FRONTEND=noninteractive

# Download required packages via apt
RUN apt-get update -y && apt-get install -y \
    git \
    libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev

# Download and setup rust
RUN curl https://sh.rustup.rs -sSf | bash -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

# Download and setup nodejs (https://github.com/nodesource/distributions?tab=readme-ov-file#installation-instructions)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - &&\
    apt-get install -y nodejs

# Clean up stale packages
RUN apt-get clean -y && \
    apt-get autoremove --purge -y && \
    rm -rf /var/lib/apt/lists/*

# Launch bash shell by default
CMD ["/bin/bash"]
