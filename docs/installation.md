# Installation

This guide assumes you are on a Mac workstation.

## Prerequisites

### Homebrew

We're using the Homebrew package manager to install some tooling, so first we'll need to install that. You can find instructions at https://brew.sh/.

### Git

You can use Homebrew to install git:

	brew install git

### Node

Node comes with NPM, which is what we're going to use to manage dependencies and run the dev server.

	brew install node

This will install the latest version of Node, but you can specify a version if you want to use a specific version.

## Basic installation

Simply run the following command to build the node modules:

	npm install

Now you can start up the dev server:

	npm run dev

You can see the app in action at http://localhost:3000