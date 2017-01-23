# react-native-nub
Common bits and pieces

### Components
- About
    - A general about view, presenting:
        - Logo
        - Title
        - Description
        - Version
        - Release Date
        - Credits
            - including links
        - Dependencies/Modules
            - including links
- Action List
    - Presents a scrollable list of items that supports the actions:
        - Select
        - Add
        - Remove
    - Custom Images can be provided
- Checkbox
- Date/Time Picker (android)
    - Custom Images can be provided
- Icon Button
    - Custom Images can be provided
- Landing
    - A general landing view, presenting a splash image
- Navigation Drawer
    - Combining react-native-drawer with a navigation menu
    - Navigation Menu Items include:
        - Image
        - Title
        - Subtitle/Description        
- Radio Button
- Radio Button Group
    - Horizontal or Vertical group of radio buttons
- Select Dropdown
    - A combobox type of selection widget
    - Optional Label
- Select List
    - A scrollable list of checkboxes
    - Optional Title label
    - single and multiple select
- Spin Numeric
    - A numeric input field with up/down buttons
    - increments/decrements value by 1
- Spin Select
    - A widget that cycles through a list of values
        - "Circular" list moves from last to first or first to last, depending on direction
    - Left button moves to previous item in list
        - "rolls back" to last item when moving from first item
    - Right button move to next item in list
        - "rolls over" to first item when moving from last item

### Images
#### Dark and Light versions of each:
- Menu
- Home
- Info
- Refresh
- Chevron Left
- Chevron Right
- Calendar
- Clock

#### Actions
- Select
- Add
- Remove
- Accept
- Discard

### Services
- Repository
    - a (very) simple file based repository
        - load
        - save
        - remove
        - select
            - filtering
            - sorting
- Log
    - a simple logging facility
    - Levels
        - trace
        - debug
        - information
        - warning
        - error
        - fatal

### Store
A basic redux store creator, bundling common middlewares.

## Sample
To run the sample:

```
git clone https://github.com/jcapuano328/react-native-nub.git
cd react-native-nub/sample
npm install
npm start
```

### Resources
- [React Native] (https://facebook.github.io/react-native/)
- [Redux] (https://github.com/reactjs/redux)
- [React Redux] (https://github.com/gaearon/react-redux)
- [React Native Drawer] (https://github.com/rt2zz/react-native-drawer)
- [React Native Router Flux] (https://github.com/aksonov/react-native-router-flux)
- [React Native File System] (https://github.com/johanneslumpe/react-native-fs)
- [Jest : you know, for testing](https://facebook.github.io/jest/)
