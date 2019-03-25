export default function(count = 0, action) {
    if(action.type === 'addFavorite') {
        console.log('dans mon reducer add Favorite');
        return count + 1;
    } else {
        return count;
    }
  }