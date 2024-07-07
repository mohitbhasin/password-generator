# <img src="https://github.com/mohitbhasin/password-generator/blob/develop/icons/icon.png?raw=true" alt="drawing" width="40" align=center>asswordGenerator
The project generates random set of characters that can be used to set or reset password across online accounts. 

## Project Description

The password can be generated with a click of a button from the UI. The default length of the password will be 11. The length of password can range between 7 and 16, which can be adjusted using the slider.

Every generated password will include:
- Special Character
- Number
- Upper Case Alphabet
- Lower Case Alphabet

NodeJs, Typescript, Angular and Electron have been used for the development of this project. NodeJs and Angular makes building project and adding libraries convenient. Angular also has large selection of libraries and features including Material Design UI components. Electron helps package javascript style apps into desktop apps with support for all major OS platforms.

Some of the challenges faced during the development were:
- Adjusting CSS to align the components.
- Generating custom icon for the electron app.

Features for the future:
- Add mini app for the menu bar.
- Ability to change background color for the app.

<!-- ![Image](https://github.com/mohitbhasin/password-generator/blob/develop/demo.gif?raw=true) -->
<img src="https://github.com/mohitbhasin/password-generator/blob/develop/demo.gif?raw=true" width="500">

## How to package and run the app
### Prerequisites
- Node is required for installing dependencies of the project.
- Electron is required for package the application into desired OS.

### Setup and Run
- Clone the repository, install dependencies
```
$git clone https://github.com/mohitbhasin/password-generator.git

$cd password-generator

$npm install
```

- Package the application using electron (Mac). The application will be generated under password-generator-darvin-x64 directory.
```
$electron-packager . --platform=darwin --overwrite --icon=icons/pass_gen.icns
```

## How to use the application
- Clicking Generate button will display random password.
- Use the slider to adjust the length of password to be generated.
