import styled from '@emotion/styled'

export const StyledFileDropWrapper = styled.div`
    border: 1px solid black;
    // width: 600;
    color: black;
    padding: 1rem;
    height: 100%;
    display: flex;
    align-items: center;

    .file-drop {
        /* relatively position the container bc the contents are absolute */
        position: relative;
        minHeight: 100px;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .file-drop > .file-drop-target {
        /* basic styles */
        // position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 2px;

        /* horizontally and vertically center all content */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        text-align: center;
    }

    .file-drop > .file-drop-target.file-drop-dragging-over-frame {
        /* overlay a black mask when dragging over the frame */
        border: none;
        background-color: rgba(0, 0, 0, 0.15);
        box-shadow: none;
        z-index: 50;
        opacity: 1;

        /* typography */
        color: white;
    }

    .file-drop > .file-drop-target.file-drop-dragging-over-target {
        /* turn stuff orange when we are dragging over the target */
        color: ${({ theme }: { theme?: Theme }) => theme?.palette.primary.main};
        box-shadow: ${({ theme }: { theme?: Theme }) => `0 0 13px 3px ${theme?.palette.primary.main}`};
    }
`