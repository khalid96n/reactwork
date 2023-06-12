import { useFetchAlbumsQuery,useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button";
 
function AlbumsList({ user }) {

  const {data,error,isLoading} = useFetchAlbumsQuery();
  const [addAlbum,results] = useAddAlbumMutation();
  const handleAddAlbum = ()=>{
    addAlbum(user);
  };


  let content;
  if(isLoading){
    content =<Skeleton times={3}/>;
  }else if (error){
    content = <div>Error loading album</div>;
  }else{
    content= data.map((album)=>{
      const header = <div>{album.title}</div>; 
      return( <ExpandablePanel key={album.id} header={header}>
        list Of photos in the album
      </ExpandablePanel>
);
    });
  }

  return <div>
          <div>
            Albums for {user.name}
            <Button onClick={handleAddAlbum}> + Add album</Button>
          </div>
          <div>
            {content}
          </div>
        </div>;
}

export default AlbumsList;
