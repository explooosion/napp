var grunt = require('grunt');

grunt.config.init({
  pkg: grunt.file.readJSON('./napp/package.json'),
  'create-windows-installer': {
    ia32: {
      appDirectory: './napp/napp-win32-x64',
      outputDirectory: './napp/installer64',
      authors: 'Robby',
      title: 'napp',
      exe: 'napp.exe',
      description: 'alarm clock',
      noMsi: true,
      loadingGif: 'clock.ico',
      setupIcon: 'clock.ico',
      icon: 'clock.ico',
    }
  }
})

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']);