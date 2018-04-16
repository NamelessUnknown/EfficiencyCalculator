using EfficiencyCalc.DAL;
using EfficiencyCalc.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EfficiencyCalc.Models.Repository
{
    public class PageCountRepo : IPageCount
    {
        private readonly DatabaseContext _databaseContext;

        public PageCountRepo(DatabaseContext databaseContext)
        {
            databaseContext = _databaseContext;
        }

        public int AddPageCount(PageCount pageCount)
        {
            if(pageCount == null)
            {
                throw new Exception("Page count cannot be null");
            }
            _databaseContext.PageCounts.Add(pageCount);
            _databaseContext.SaveChanges();
            return pageCount.Id;
        }
        public List<PageCount> GetPageCounts()
        {
            return _databaseContext.PageCounts.ToList();
        }

        public PageCount GetPageCount(int pageCountId)
        {
            if(pageCountId <= 0)
            {
                throw new Exception("Page Count ID cannot be less or equal to 0");
            }

            return _databaseContext.PageCounts.Where(pageCount => pageCount.Id == pageCountId).FirstOrDefault();
        }

        public int UpdatePageCount(PageCount pageCount)
        {
            if (pageCount == null)
            {
                throw new Exception("Page count cannot be null");
            }

            _databaseContext.PageCounts.Update(pageCount);
            _databaseContext.SaveChanges();
            return pageCount.Id;
        }

        public void DeletePageCount(PageCount pageCount)
        {
            if (pageCount == null)
            {
                throw new Exception("Page count cannot be null");
            }

            _databaseContext.PageCounts.Remove(pageCount);
            _databaseContext.SaveChanges();

        }





    }
}
