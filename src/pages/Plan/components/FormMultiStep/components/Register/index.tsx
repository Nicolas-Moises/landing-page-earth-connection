import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MultiStep } from "../MultiStep";
import { Container, FormError, FormRegister } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'


const registerFormSchema = z.object({
    name: z.string().min(7, {
        message: "Deve conter seu nome e sobrenome"
    })
        .transform((name) => name.toLowerCase()),

    cpf: z.string().min(11, {
        message: "Digite um CPF válido"
    }).max(14, {
        message: "Digite um CPF válido"
    }),
    email: z.string()
        .email({
            message: "Must be a valid email",
        })
        .transform((email) => email.toLowerCase()),
    phone: z.string(),
})


type RegisterFormData = z.infer<typeof registerFormSchema>

export function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
    })

    async function handleRegister(data: RegisterFormData) {
        console.log(data)
    }

    return (
        <Container>
            <header>
                <MultiStep size={4} currentStep={1} />
            </header>
            <FormRegister onSubmit={handleSubmit(handleRegister)}>
                <label htmlFor="name">
                    <span>
                        Digite seu nome completo
                    </span>
                    <input
                        type="text"
                        placeholder="Nome completo"
                        id="name"
                        {...register('name')}
                        autoFocus
                    />

                    {errors.name && (
                        <FormError>
                            {errors.name.message}
                        </FormError>
                    )}
                </label>

                <label htmlFor="cpf">
                    <span>
                        Digite seu CPF
                    </span>
                    <input
                        placeholder="CPF"
                        id="cpf"
                        {...register('cpf')}

                    />

                    {errors.cpf && (
                        <FormError>
                            {errors.cpf.message}
                        </FormError>
                    )}
                </label>

                <label htmlFor="email">
                    <span>
                        Digite seu endereço de e-mail
                    </span>
                    <input
                        type="email"
                        placeholder="E-mail"
                        id="email"
                        {...register('email')}
                    />
                    {errors.email && (
                        <FormError>
                            {errors.email.message}
                        </FormError>
                    )}
                </label>

                <label htmlFor="text">
                    <span>
                        Digite seu número de celular
                    </span>
                    <input
                        type="phone"
                        placeholder="Telefone"
                        id="phone"
                        {...register('phone')}
                    />

                    {errors.phone && (
                        <FormError>
                            {errors.phone.message}
                        </FormError>
                    )}
                </label>

                <button type='submit' disabled={isSubmitting}>
                    Próximo passo
                    <ArrowRight weight="bold" />
                </button>
            </FormRegister>
        </Container>
    )
}