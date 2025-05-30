$baseUrl = "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/public/desktop_pc"
$files = @(
    "scene.bin",
    "scene.gltf",
    "textures/Material.001_baseColor.png",
    "textures/Material.001_metallicRoughness.png",
    "textures/Material.002_baseColor.jpeg",
    "textures/Material.002_metallicRoughness.png",
    "textures/Material.023_baseColor.jpeg",
    "textures/Material.024_baseColor.png"
)

# Create directories
New-Item -ItemType Directory -Force -Path "public/desktop_pc/textures"

foreach ($file in $files) {
    $url = "$baseUrl/$file"
    $outputPath = "public/desktop_pc/$file"
    
    Write-Host "Downloading $file..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath
        Write-Host "Successfully downloaded $file"
    } catch {
        Write-Host "Failed to download $file"
    }
} 