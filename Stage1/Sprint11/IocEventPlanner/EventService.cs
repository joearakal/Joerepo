namespace IocEventPlanner
{
    public class EventService
    {
        private ICatalog iCatalog;
        private ICatDetail iDetl;
        
        public EventService(ICatalog _iCatalog)
        {
            iCatalog = _iCatalog;
        }
        public EventService(ICatalog _iCatalog, ICatDetail _iDetail)
        {
            iDetl = _iDetail;
            iCatalog = _iCatalog;
        }
        public void showData(string _event, string _location, string _date, double budget)
        {
            iCatalog.ShowInfo(_event, _location, _date, budget);
        }

        public void showDetail(string catering, string photo, string speciality)
        {
            iDetl.ShowDet(catering, photo, speciality);
        }
    }
}