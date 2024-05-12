# !/bin/bash

readonly TAURI_PREREQUISITE_PACKAGES=(
    "webkit2gtk"
    "base-devel"
    "curl"
    "wget"
    "file"
    "openssl"
    "appmenu-gtk-module"
    "gtk3"
    "libappindicator-gtk3"
    "librsvg"
    "libvips"
)
readonly RUST_PACKAGE="rust"
readonly NODEJS_PACKAGE=(
    "nodejs-lts-iron"
    "npm"
)

pacman_installTauriPrerequisites() {
    pacman -S --noconfirm --needed ${TAURI_PREREQUISITE_PACKAGES[@]}
}

pacman_uninstallTauriPrerequisites() {
    pacman -Runs ${TAURI_PREREQUISITE_PACKAGES[@]}
}

pacman_installRust() {
    pacman -S --noconfirm --needed ${RUST_PACKAGE}
}

pacman_uninstallRust() {
    pacman -Runs ${RUST_PACKAGE}
}

pacman_installNodeJS() {
    pacman -S --noconfirm --needed ${NODEJS_PACKAGE[@]}
}

pacman_uninstallNodeJS() {
    pacman -Runs ${NODEJS_PACKAGE[@]}
}

pacman_installTauriPrerequisites
pacman_installRust
pacman_installNodeJS
