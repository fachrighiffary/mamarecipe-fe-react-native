import React, {useRef} from 'react'
import styled from 'styled-components'
import Images from '../images'
import {Transition, Transitioning} from 'react-native-reanimated';

const bgColors = {
    Home: '#707477',
    Plus: '#707477',
    Chat: 'yellow',
    Profile: '#707477'
}
const textColor = {
    Home: 'white',
    Plus: 'white',
    Chat: 'grey',
    Profile: 'white'
}

const Container = styled.TouchableWithoutFeedback``;
const Background = styled(Transitioning.View)`
    flex: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.focused ? bgColors[props.label] : 'white')}
    border-radius : 100px
    margin: 6px
`;
const Icon = styled.Image`
    height : 24px;
    width: 24px
`;
const Label = styled.Text`
    color: ${(props) => textColor[props.label]};
    font-weight : bold;
    margin-left: 8px;
`;


function Tab ({label, accessibilityState, onPress}){
    const focused = accessibilityState.selected;
    const icon = !focused ? Images.icons[label] : Images.icons[`${label}Focused`]

    const transition = (
        <Transition.Sequence>
            <Transition.Out type="fade" durationMs={0} />
            <Transition.Change interpolation="easeInOut" durationMs={300} />
            <Transition.In type="fade" durationMs={300} />
        </Transition.Sequence>
    );

    const ref = useRef()

    return(
        <Container onPress={() => {
            ref.current.animateNextTransition();
            onPress();
        }}>
            <Background 
                focused={focused} 
                label={label} 
                ref={ref} 
                transition={transition}
            >
                <Icon source={icon} />
                {focused && (
                    <Label label={label}>
                        {label.charAt(0).toUpperCase() + label.slice(1)}
                    </Label>
                )}
            </Background>
        </Container>
    )
}

export default Tab