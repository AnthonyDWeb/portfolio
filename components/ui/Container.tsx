export default function Container({
                                      children
                                  }: {
    children: React.ReactNode
}) {
    return (
        <div className="w-[90%] max-w-[1300px] mx-auto">
            {children}
        </div>
    );
}