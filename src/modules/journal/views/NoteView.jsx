import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../../hooks/useForm"
import { useSelector } from "react-redux"
import { useMemo } from "react"


export const NoteView = () => {

    const { active:note } = useSelector( state => state.journal);

    const {body, title, date, onInputChange, formState  } =useForm( note );

    const dateString = useMemo( () => {
        const newDate = new Date( date )
        return newDate.toUTCString()
        
    }, [date])

  return (
    <Grid2 
        className='animate_animated animate__fadeIn animate__faster'
        container direction='row' 
        justifyContent='space-between' 
        alignItems='center' sx={{ mb:1 }}
    >
        <Grid2>
            <Typography fontSize={ 39 } fontWeight='light'>{dateString}</Typography>
        </Grid2>
        <Grid2>
            <Button color="primary" sx={{padding: 2, boxShadow: 10}}>
                <SaveOutlined sx={{ fontSize: 30, mr:1 }}/>
                Guardar
            </Button>
        </Grid2>

        <Grid2 container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Agrega el título"
                label="Título"
                sx={{ border:"none", mb: 1  }}
                name="title"
                value={ title }
                onChange={ onInputChange }
            
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió hoy?"
                minRows={ 5 }
                name="body"
                value={ body }
                onChange={ onInputChange }
                
            
            />
        </Grid2>

        {/* Imagenes  */}
        <ImageGallery />
      
    </Grid2>
  )
}


