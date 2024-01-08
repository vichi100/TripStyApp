https://casesandberg.github.io/react-color/  color picker url

https://icons.expo.fyi/Index    Expo Icon URL

https://callstack.github.io/react-native-paper/docs/components/ToggleButton/  React Native Paper

https://callstack.github.io/react-native-paper/4.0/text-input-icon.html React Native Paper detail docs 

https://oblador.github.io/react-native-vector-icons/   react native vector icon list / search URL

https://looka.com/blog/color-combinations/    color pallets


################# How to push new project in github ############

1) create repo in github
2) go to vs code terminal it will open in project dir 
3) Run below commands

    1. git init
    2. git commit -m "First Commit"    
    3. git branch -M main         
    4. git remote add origin <your git hub repo "https" URL> as below

    git remote add origin https://github.com/vichi100/TripStyApp.git

    5. git push -u origin main

    6. if you get below error on (5) step 

        vichirajan@Vichis-MacBook-Pro TripStyApp % git push -u origin main
        To https://github.com/vichi100/TripStyApp.git
        ! [rejected]        main -> main (non-fast-forward)
        error: failed to push some refs to 'https://github.com/vichi100/TripStyApp.git'
        hint: Updates were rejected because the tip of your current branch is behind
        hint: its remote counterpart. If you want to integrate the remote changes,
        hint: use 'git pull' before pushing again.
        hint: See the 'Note about fast-forwards' in 'git push --help' for details.

    then run below command

    7. Verify your repo in github if your has been pushed.

        git push -f origin main  

Help URL : https://www.youtube.com/watch?v=ueQs5pQ8ZMM

################# End ############

