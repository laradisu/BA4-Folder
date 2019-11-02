/*
deleteFavourite(id){
    const { favourites } = this.state
    const newList = [
        ...favourites.slice(0,id),
        ...favourites.slice(id + 1)
    ]
    this.setState({
        favourites: newList
    })
}
*/