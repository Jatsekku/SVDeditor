// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use anyhow;
use serde::{ser::Serializer, Serialize};
use std::fs::File;
use std::io::Read;
use svd_parser as svd;
use svd_rs::device::Device;
use thiserror;

#[derive(Debug, thiserror::Error)]
pub enum CommandError {
    #[error(transparent)]
    AnyhowError(#[from] anyhow::Error),
    #[error(transparent)]
    IOError(#[from] std::io::Error),
}

impl Serialize for CommandError {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}

pub type CommandResult<T, E = CommandError> = anyhow::Result<T, E>;

#[tauri::command]
fn parse_svd_file(path: String) -> CommandResult<Device> {
    let mut svd_content = String::new();
    let mut svd_file = File::open(path)?;
    svd_file.read_to_string(&mut svd_content)?;
    let svd_content = svd::parse(&svd_content)?;
    Ok(svd_content)
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![parse_svd_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
