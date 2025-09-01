# Check if Git is installed
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[winstro*script]: Git is not installed. Installing Git..."
    $gitInstallerPath = "$env:TEMP\Git-Installer.exe"
    Invoke-WebRequest -Uri "https://github.com/git-for-windows/git/releases/download/v2.51.0.windows.1/Git-2.51.0-64-bit.exe" -OutFile $gitInstallerPath
    Start-Process -FilePath $gitInstallerPath -ArgumentList "/VERYSILENT", "/NORESTART" -Wait
    Remove-Item $gitInstallerPath
    Write-Host "[winstro*script]: Git installed successfully."
} else {
    Write-Host "[winstro*script]: Git is already installed."
    Start-Sleep -Seconds 1.5
    Clear-Host
}

# Installing Bun
Write-Host "[winstro*script]: Installing Bun..."
Invoke-WebRequest -Uri "https://bun.sh/install.ps1" -OutFile "install_bun.ps1"
& .\install_bun.ps1
Remove-Item .\install_bun.ps1
Clear-Host

# Add Bun to PATH
Write-Host "[winstro*script]: Adding Bun to PATH..."
$env:Path += ";$env:USERPROFILE\.bun\bin"
[System.Environment]::SetEnvironmentVariable("Path", $env:Path, [System.EnvironmentVariableTarget]::User)
Write-Host "[winstro*script]: Bun installed successfully."
Start-Sleep -Seconds 1.5
Clear-Host

# Clone the repository
Write-Host "[winstro*script]: Cloning the repository..."
git clone https://github.com/rearrangement/winstro winstro
Set-Location .\winstro
Write-Host "[winstro*script]: Repository cloned successfully."
Start-Sleep -Seconds 1.5
Clear-Host

# Install dependencies
Write-Host "[winstro*script]: Installing dependencies..."
bun i
Write-Host "[winstro*script]: Dependencies installed successfully."
Start-Sleep -Seconds 1.5
Clear-Host

# Run the main script
bun run main