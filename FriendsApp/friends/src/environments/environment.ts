// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    // Initialize Firebase
    firebase: {
        apiKey: "AIzaSyDl7IfcliT1S0j70WRGkpxjuAtPkPcg4XM",
        authDomain: "friends-d19b0.firebaseapp.com",
        databaseURL: "https://friends-d19b0.firebaseio.com",
        projectId: "friends-d19b0",
        storageBucket: "friends-d19b0.appspot.com",
        messagingSenderId: "39609044278"
    }
};
