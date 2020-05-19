export const paginate = (data, currentPage) => {
  const start = 1
  if(currentPage === start){
    return data.slice(start-1,start+3)
  }else if(currentPage > start){
    return data.slice(currentPage+ 2, currentPage + 6 )
  }else return data;
}
