const shell = require("shelljs");
shell.cp("-R", "package.json", "dist/");
shell.cp("-R", "uploads", "dist/");
shell.cp("-R", "src/config/codes.json", "dist/config");
shell.cp("-R", "Procfile", "dist/");
