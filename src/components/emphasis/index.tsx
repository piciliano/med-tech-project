import * as C from './styles'
import Service from '../../assets/images/pngwing.com.png'
import { ListEmph } from '../../../utils/emphasis-list'


export const Emphasis = () => {
    return (
        <C.Container>
            <C.Box>
                <C.Img src={Service} alt='service' />
            </C.Box>
            <C.BoxTwo>
                {ListEmph.map((item) => (
                    <C.OptionsStyle>
                        {item.title}
                    </C.OptionsStyle>
                ))}
            </C.BoxTwo>
        </C.Container>
    )
}