import Icons from '../resources';

export default (icons = Icons) => (image) => {
    if (typeof image == 'string') {
        return icons[image];
    }
    return image;
}
