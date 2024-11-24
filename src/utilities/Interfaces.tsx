import { Dispatch, SetStateAction } from 'react';
import { TModalProps } from './Types';


export interface ILoginModalProps extends TModalProps {
    show : boolean,
    registerModalShow: boolean,
    setRegisterModalShow: Dispatch<SetStateAction<boolean>>,
    brand_name ?: string
}