import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

interface FormData {
    email: string,
    password: string
}

const schema = yup.object({
    email: yup
        .string()
        .email("Email niepoprawny")
        .required("Email jest wymagany"),
    password: yup
        .string()
        .required("Hasło jest wymagane")
        .min(8, "Minimum 8 znaków"),
})

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: "onBlur",
    })

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const initialValues = {
        email: "",
        password: ""
    }

    const onSubmit = (values: FormData) => {
        console.log(values);
    }

    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-center text-center">
                <h1>Logowanie</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md flex flex-col items-center gap-4">
                    <div className="flex flex-col">
                        <FormControl  sx={{ m: 1, minWidth: '20vw',}}> 
                            <TextField
                              {...register("email")}
                              id="outlined-multiline-flexible"
                              label="Email"
                            />
                        </FormControl>
                        <p className="text-red-400">{errors.email?.message}</p>
                    </div> 

                    <div className="flex flex-col">
                        <FormControl sx={{ m: 1, minWidth: '20vw',}} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-password">Hasło</InputLabel>
                          <OutlinedInput
                            {...register("password")}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                  }
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  onMouseUp={handleMouseUpPassword}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Hasło"
                          />
                        </FormControl>
                        <p className="text-red-400" >{errors.password?.message}</p>
                    </div>

                    <Button type="submit" variant="contained">Zaloguj</Button>
                </form>
            </main>
        </>
    )
}