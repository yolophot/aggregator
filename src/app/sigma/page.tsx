import { AuthGuard } from '@/widgets/authWidget';

const Sigma = () => {
    return (
        <div>
            <AuthGuard>
                <div>You signed in</div>
            </AuthGuard>
        </div>
    );
};
export default Sigma;
